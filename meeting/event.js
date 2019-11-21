(async function () {
  let meetings;
  async function init() {
    await $.ajax({
      type: "GET",
      url: "http://172.26.0.49:3000/meeting",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("x-access-token", localStorage.getItem('token'));
      },
      dataType: "json",
      success: (data, status) => {
        meetings = data.data.meetings;
      },
      error: (xhr, status, error) => {
        alert("미팅 조회에 실패하였습니다.");
      }
    });
  }

  await init();
  const [form] = document.getElementsByClassName('form');
  if (meetings.length === 0) {
    $('.form').append('신청 가능한 예약이 없습니다');
  }
  console.log(meetings[0])
  for (let i = 0; i < meetings.length; i++) {
    $('.form').append(`<div id=meeting${i} class="form_mt">
        <div class="meeting">${meetings[i].title}</div>
        <div class"meeting_info">${meetings[i].joined_member}/${meetings[i].max_member} (${meetings[i].start_time}~${meetings[i].end_time})</div>
        <div class="meeting_infO">${getPlace(meetings[i].place_idx)}
        </div>`);
    document.getElementById(`meeting${i}`).addEventListener('click', () => {
      $.ajax({
        type: "GET",
        url: "http://172.26.0.49:3000/meeting/" + meetings[i].idx,
        beforeSend: function (xhr) {
          xhr.setRequestHeader("x-access-token", localStorage.getItem('token'));
        },
        dataType: "json",
        success: (data, status) => {
          alert('신청에 완료하였습니다.');
          location.href = './'
        },
        error: (xhr, status, error) => {
          alert("이미 신청하였습니다.");
        }
      })
    });
  }
})()

function getPlace(idx) {
  switch (idx) {
    case (1):
      return '씨름장'
    case (2):
      return '농구장'
    case (3):
      return '탁구장'
    case (4):
      return '체육관'
    case (5):
      return '운동장'
      return '운동장'
  }
}