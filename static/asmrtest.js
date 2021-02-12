
function play_video(video_id){
  let mux_url = $("#video_" + video_id + "_player").data("mux_url");

  // HLS.js-specific setup code
  if (Hls.isSupported()) {
    let video = document.getElementById("video_" + video_id + "_player");
    const hls = new Hls();
    hls.loadSource(mux_url);
    hls.attachMedia(video);
  }
  $("#video_"+video_id+"_player").show();
  $("#video_"+video_id+"_thumbnail").hide();
  $("#video_"+video_id+"_play_button").hide();
}


$('[id*=_video_].autosave').autosave({
  done:function(){
    location.reload();
  }
});


