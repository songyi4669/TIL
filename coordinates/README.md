# 좌표찾아 007! 🎯

![coordinater](https://user-images.githubusercontent.com/81962246/118397970-80a8ee80-b691-11eb-80eb-01927b22277d.gif)

## 소개
- 마우스를 움직이면 clientX, clientY을 출력합니다.

## 기술스택
이 프로젝트에 사용된 기술은 다음과 같습니다.
- JavaScript
- CSS3
- HTML5

## 기술 상세
```javascript
document.addEventListener('mousemove', event => {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`${x} ${y}`);

    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x-targetHalfWidth}px, ${y-targetHalfHeight}px)`;
    tag.style.transform = `translate(${x}px, ${y}px)`;
    tag.innerHTML = `${x}px, ${y}px`;
    });
 ```
1. addEventListener의 mousemove를 사용
2. x, y에 clientX, clientY를 할당함
3. 각 변수에 style 속성에 x, y변수를 할당하여 마우스를 따라다니게 적용
