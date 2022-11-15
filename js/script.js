Array.prototype.forEach.call(document.getElementsByTagName('a'), function(link) {
  link.target = "_blank"
})

dayjs.extend(window.dayjs_plugin_relativeTime)
const date = dayjs('2022-11-15 22:21');

document.getElementById("label-ago").innerHTML = date.fromNow();
