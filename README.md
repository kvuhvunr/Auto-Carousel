
# Carousel

프로젝트를 계기로 라이브러리, API, 커스텀 훅 없이 로직 구상 후 구현한 버튼, 자동 캐러셀입니다.

자세한 구현 과정은 [Velog](https://velog.io/@rxxdo/React-PJ.-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EC%97%86%EC%9D%B4-%EB%B2%84%ED%8A%BC-%EC%9E%90%EB%8F%99%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C-%EA%B5%AC%ED%98%84)
에 작성하였습니다.

<br>
주요 기능은 다음과 같습니다.<br>
- 버튼 클릭 시 캐러셀 작동.<br>
- 이미지 별 2.5초 정지 후 자동 캐러셀 작동.<br>

<br>
setTimeout 함수를 이용해 설정한 width 값을 자동으로 이동.<br>
버튼 이벤트 발생 시 핸들러를 이용해 설정한 width 값 이동. ( 자동 진행 순간에도 버튼 이벤트 발생 시 최우선 실행 ) <br>

<br>
<br>

기능적으로 현재 문제는 없으나 아쉬운 코드 부분을 발견하여 최대한 빠르게 수정 후 재업로드 하겠습니다 :) 

<br>

![Apr-09-2022 20-21-14](https://user-images.githubusercontent.com/91541970/162569804-55bb4611-c707-427c-8cf1-cdd87c07d511.gif)
