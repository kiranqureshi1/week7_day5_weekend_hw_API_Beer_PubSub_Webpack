const RequestHelper = function (url) {
  this.url = url
}

RequestHelper.prototype.get = function () {
  console.log("request helper running");

  return fetch(this.url)
    .then(response => response.json());
};

module.exports = RequestHelper;
