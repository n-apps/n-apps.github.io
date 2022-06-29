Array.prototype.forEach.call(document.getElementsByTagName('a'), function(link) {
  link.target = "_blank"
})

dayjs.locale('ru')
dayjs.extend(window.dayjs_plugin_relativeTime)
const date = dayjs('2022-06-29');

document.getElementById("label-ago").innerHTML = date.fromNow();
