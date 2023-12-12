// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "완벽하지 않아도 괜찮아💓 " },
  { "number": 2, "message": "할뚜이따!!!세번씩 외치고 하루 시작하기💪 " },
  { "number": 3, "message": "사랑이 넘치는 12월💖 " },
  { "number": 4, "message": "어쩌면 눈처럼 설레는 소식이 찾아올지도?!" },
  { "number": 5, "message": "재물부적을 받아랏!" },
  { "number": 6, "message": "나의 사랑을 받아랏!💗 " },
  { "number": 7, "message": "함께해서 즐거웠던 23년🥰" },
  { "number": 8, "message": "행복은 어쩌면..붕어빵...?" },
  { "number": 9, "message": "행복부적을 받아랏!" },
  { "number": 10, "message": "매일 매일이 행복으로 가득하길🌟 " },
  { "number": 11, "message": "멈추지 않는다면, 날 기다리는 건 성공뿐!" },
  { "number": 12, "message": "멋져 귀여워 최고야 그게 바로 나><" },
  { "number": 13, "message": "해보자고! 대신, 무리하지 않기!" },
  { "number": 14, "message": "오늘 하루도 힘내보자구!" },
  { "number": 15, "message": "행운부적을 받아랏 🍀 " },
  { "number": 16, "message": "오늘도 기분 좋은 하루 보내시라구용!" },
  { "number": 17, "message": "우울할땐 빵뎅이를 흔들어봥><" },
  { "number": 18, "message": "오히려 좋아!" },
  { "number": 19, "message": "못해도 GO! 가보자고~!~!" },
  { "number": 20, "message": "쫄면 천원,,히히,,🙄 " },
  { "number": 21, "message": "아자아자 힘내자구!" },
  { "number": 22, "message": "오늘의 할일 : 내 사랑들에게 감사문자 보내기><" },
  { "number": 23, "message": "완벽하지 않아도 괜찮아. 잘하고 있다!!!" },
  { "number": 24, "message": "두근두근 크리스마스, 모두들 행복 가득한 크리스마스 보내길🎅🎄" }
];

