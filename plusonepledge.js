function getGodSentMembers(){
  var members = document.querySelectorAll('.feed-shared-text-view.white-space-pre-wrap.break-words.ember-view');
  var regex = /\dw/g
  members.forEach(member =>{
    if(regex.test(member.innerText.toString())){
      member.parentElement.parentElement.parentElement.parentElement.style.backgroundColor = '#5bfff4';
    }
  });
}

window.addEventListener('scroll', getGodSentMembers);


.feed-shared-actor__meta
.feed-shared-text-view.white-space-pre-wrap.break-words.ember-view
