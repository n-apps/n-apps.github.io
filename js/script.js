Array.prototype.forEach.call(document.getElementsByTagName('a'), function(link) {
  link.target = "_blank"
})

dayjs.extend(window.dayjs_plugin_relativeTime)
const date = dayjs('2023-02-09 22:21');

document.getElementById("label-ago").innerHTML = date.fromNow();
