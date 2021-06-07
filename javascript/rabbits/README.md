# 토끼를 찾아라! 🐇


![rabbit](https://user-images.githubusercontent.com/81962246/118397539-6f5ee280-b68f-11eb-8b84-a29bca87b855.gif)

## 소개
- 버튼을 클릭하면 당근 사이에 있는 토끼를 찾습니다.

## 기술스택
이 프로젝트에 사용된 기술은 다음과 같습니다.
- JavaScript
- CSS3
- HTML5

## 기술 상세
```javascript
      scrollInto.addEventListener('click', event=>{
        rabbit.scrollIntoView({behavior:'smooth', block:'center'});
      });
 ```
1. scrollIntoView를 사용하여 토끼를 찾음
2. behavior:'smooth'를 사용해 스무스한 효과 적용
3. block:'center'로 토끼가 브라우저 가운데에 위치함
