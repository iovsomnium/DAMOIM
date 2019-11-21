const [apply] = document.getElementsByClassName('apply');

apply.addEventListener('click', () => {
  let title = document.getElementById("title").value;
  let start_time = document.getElementById("start_time").value;
  let end_time = document.getElementById("end_time").value;
  let content = document.getElementById("content").value;
  let max_member = document.getElementById("max_member").value;
  let place = document.getElementById("place").value;

  const year = new Date().getFullYear();
  const month = (new Date().getMonth() + 1) < 9 ? `0${new Date().getMonth() + 1}` : new Date().getMonth() + 1;
  const _date = (new Date().getDate()) < 9 ? `0${new Date().getDate()}` : new Date().getDate();

  const date = `${year}-${month}-${_date}`;
  console.log(date);
  $.ajax({
    beforeSend: function (xhr) {
      xhr.setRequestHeader("x-access-token", localStorage.getItem('token'));
    },
    type: "POST",
    url: "http://172.26.0.49:3000/meeting",
    data: { title, start_time, end_time, content, max_member, place_idx: place, date },
    dataType: "json",
    success: (data, status) => {
      alert("방 생성에 성공하였습니다.");
      // main과 redirect
      location.href = "../meeting"
    },
    error: (xhr, status, error) => {
      alert("이미 예약이 존재합니다.");
    }
  });
});