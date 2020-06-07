# [START gae_python37_app]
from flask import Flask, request
import cv2
import urllib
import numpy as np
import ssl
from skimage.feature import local_binary_pattern
from scipy.stats import itemfreq

# If `entrypoint` is not defined in app.yaml, App Engine will look for an app
# called `app` in `main.py`.
app = Flask(__name__)


@app.route('/')
def hello():
    """Return a friendly HTTP greeting."""
    return 'Hello World!'

@app.route('/score')
def api_id():
    # Check if an ID was provided as part of the URL.
    # If ID is provided, assign it to a variable.
    # If no ID is provided, display an error in the browser.
    if 'p1' in request.args and 'p2' in request.args:# and 'cat' in request.args:
        p1 = request.args.get('p1')
        p2 = request.args.get('p2')
        #cat = request.args.get('cat')
    else:
        return "Input error."

    # get images from URL
    ssl._create_default_https_context = ssl._create_unverified_context
    req1 = urllib.request.urlopen(p1)
    arr1 = np.asarray(bytearray(req1.read()), dtype=np.uint8)
    img1 = cv2.imdecode(arr1, cv2.IMREAD_COLOR)
    req2 = urllib.request.urlopen(p2)
    arr2 = np.asarray(bytearray(req2.read()), dtype=np.uint8)
    img2 = cv2.imdecode(arr2, cv2.IMREAD_COLOR)

    # calc color correlation
    img1blk = cv2.cvtColor(img1, cv2.COLOR_BGR2GRAY);
    img2blk = cv2.cvtColor(img2, cv2.COLOR_BGR2GRAY);
    hist1 = cv2.calcHist([img1blk], [0], None, [256], [0, 256])
    hist2 = cv2.calcHist([img2blk], [0], None, [256], [0, 256])
    colorDiff = cv2.compareHist(hist1, hist2, cv2.HISTCMP_BHATTACHARYYA) # 0-1 higher this is, less close it is
    colorDiff = 1-colorDiff

    # texture comparison
    lbp1 = local_binary_pattern(img1blk, 24, 3, method='uniform')
    freq1 = itemfreq(lbp1.ravel())
    text_hist1 = freq1[:, 1]/sum(freq1[:, 1]) # normalize
    lbp2 = local_binary_pattern(img2blk, 24, 3, method='uniform')
    freq2 = itemfreq(lbp2.ravel())
    text_hist2 = freq2[:, 1]/sum(freq2[:, 1])
    textDiff = cv2.compareHist(np.array(text_hist1, dtype=np.float32), np.array(text_hist2, dtype=np.float32), cv2.HISTCMP_BHATTACHARYYA)
    textDiff = 1-textDiff

    return str(textDiff)
    


if __name__ == '__main__':
    # This is used when running locally only. When deploying to Google App
    # Engine, a webserver process such as Gunicorn will serve the app. This
    # can be configured by adding an `entrypoint` to app.yaml.
    app.run(host='127.0.0.1', port=8080, debug=True)
# [END gae_python37_app]


# python3 main.py to run