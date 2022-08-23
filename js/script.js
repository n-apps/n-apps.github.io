Array.prototype.forEach.call(document.getElementsByTagName('a'), function(link) {
  link.target = "_blank"
})

dayjs.extend(window.dayjs_plugin_relativeTime)
const date = dayjs('2022-08-23 19:21');

document.getElementById("label-ago").innerHTML = date.fromNow();
