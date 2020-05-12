  <style type="text/css">.story_viewer{z-index:90001;}.story_close{z-index: 90010; cursor: pointer;}.loader{display: inline-block;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);position:absolute;width: 64px;height: 64px;}.loader:after {content: " ";display: block;width: 46px;height: 46px;margin: 1px;border-radius: 50%;border: 5px solid black;border-color: black transparent black transparent;animation: loader 1.2s linear infinite;}@keyframes loader {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}</style>

  <div id="story_viewer" class="position-absolute invisible d-none">
		<div class="fixed-bottom">
			<div class="position-absolute story_close" style="top: -55px; right: 20px"><i class="las la-times-circle la-2x text-white"></i></div>
		</div>
	</div>

	<script type="text/javascript">
		window.addEventListener('load',function(){
			var loader =document.createElement('div');
			var story_viewer = document.querySelector('#story_viewer');
			loader.className='loader';
			$('#story_viewer').addClass('invisible d-none');
			$('.stories_trigger').click(function(e){
				var id = this.id;
				document.body.appendChild(loader);
				var iframe = document.createElement('iframe');
				iframe.frameBorder = 0;
				iframe.src = 'https://server.makestories.io/preview/' + id;
				iframe.allowFullscreen = true;
				iframe.height = window.innerHeight;
				iframe.width = window.innerWidth;
				iframe.style ='position:fixed;height:100%;width:100%;left:0;top:0;padding-top: 75px;';
				iframe.className='story_frame';

				story_viewer.appendChild(iframe);
				iframe.addEventListener("load",function(){
					$('#story_viewer').removeClass('invisible d-none');
					document.body.removeChild(loader);
					iframe.contentWindow.focus();
					$('.story_close').removeClass('invisible d-none');
				});
			});
			$('.story_close').click(function(e){
				$('#story_viewer').removeClass('invisible d-none');
				var frame=document.querySelector('.story_frame');
				story_viewer.removeChild(frame);
				$('.story_close').addClass('invisible d-none');
			});
		});
	</script>
