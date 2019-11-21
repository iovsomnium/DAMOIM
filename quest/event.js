(async function () {
  let quest;

  async function init() {
    await $.ajax({
      type: "GET",
      url: "http://172.26.0.49:3000/quest",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("x-access-token", localStorage.getItem('token'));
      },
      dataType: "json",
      success: (data, status) => {
        quest = data.data.quest;
      },
      error: (xhr, status, error) => {
        alert("퀘스트를 모두 완료하였습니다.");
      }
    });
  }

  await init();
  const quest_text = document.getElementById('quest_text');
  const yotube_form = document.getElementById('youtube_form');
  quest_text.innerText = quest.content;
  yotube_form.innerHTML = `<a href="${quest.url}">참고 영상 링크</a>`

  const [success_btn] = document.getElementsByClassName('success');
  success_btn.addEventListener('click', () => {
    $.ajax({
      type: 'GET',
      url: 'http://172.26.0.49:3000/quest/success',
      beforeSend: function (xhr) {
        xhr.setRequestHeader("x-access-token", localStorage.getItem('token'));
      },
      dataType: 'json',
      success: (data, status) => {
        alert('퀘스트에 성공하였습니다.');
        location.href = './';
      },
      error: (xhr, status, error) => {
        alert('모든 퀘스트를 완료하였습니다.');
        // main으로 리다이렉트
      }
    })
  });
})()