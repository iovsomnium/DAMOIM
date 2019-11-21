const [next_btn] = document.getElementsByClassName('sign-up');

next_btn.addEventListener('click', () => {
  let id = document.getElementById("id").value;
  let pw = document.getElementById("pw").value;
  let name = document.getElementById("name").value;
  let grade = document.getElementById("grade").value;
  let room = document.getElementById("room").value;
  let agree = document.getElementById("promise");

  const isChecked = $(agree).is(":checked");

  if (!isChecked) {
    alert("서약서를 확인해주세요");
  } else {
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/auth/sign-up",
      data: { id, pw, name, grade, room },
      dataType: "json",
      success: (data, status) => {
        alert("회원가입에 성공하였습니다.");
        // location href
      },
      error: (xhr, status, error) => {
        alert("이미 존재하는 회원입니다.");
      }
    });
  }
});