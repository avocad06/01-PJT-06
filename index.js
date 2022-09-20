    // 공생성 함수 선언
    const balls = function() {
      const ballContainer = document.createElement('div');
      ballContainer.classList.add('ball-container');
      
      //랜덤 숫자 생성하여
      const numbers = _.sampleSize(_.range(1, 46), 6);
      console.log(numbers);
  
      //공마다 랜덤 숫자 넣기
      for (let num of numbers) {
        const ball = document.createElement('div');
        ball.classList.add('ball')
        if (num <= 10) {
        }
  
        else if (num <= 20) {
          ball.classList.add('ball_2');
        }
        else if (num <= 30) {
          ball.classList.add('ball_3');
        }
  
        else if (num <= 40) {
          ball.classList.add('ball_4');
        }
  
        else if (num <= 50) {
          ball.classList.add('ball_5');
        }
  
        ball.innerText = num;
  
        // 랜덤 숫자가 적힌 공을 컨테이너에 추가
        ballContainer.appendChild(ball)
  
      const result = document.querySelector('#result');
      result.appendChild(ballContainer);
      }
    }

    // 1. 누를 때마다 공 받기
    const lottoBtn = document.querySelector('#lotto-btn');
    lottoBtn.addEventListener('click', balls)

    // 2. 원하는 만큼 값을 입력해서 받기
    const form = document.querySelector('#form');
    const inputs = document.querySelector('input');

    // input 받은 만큼 로또 줄 형성하기
    form.addEventListener('submit', function(event) {
      // 서버로 input 값 보내지말고
      event.preventDefault();
      // howGames에 저장한다
      const howGames = inputs.value;
      // 올바르게 출력되고 있는지 확인하기
      console.log(howGames);
      
      // input값 받은 만큼 공 생성 함수 반복
      let i = 0
      while (i < howGames) {
        balls();
        i += 1;
      }
    });