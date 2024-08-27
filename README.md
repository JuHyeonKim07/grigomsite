# GrigomSite
#그리곰 픽쳐스 회사 사이트 입니다.

## 2020년 작업.

React JS, Axios, React Router, Material - UI 사용
PHP 와 가비아 아파치 웹서버를 이용하여 메일 전송 기능을 구현하였습니다.

Naver 및 Google 의 검색 엔진에 보이도록 meta 를 추가하였습니다.

Viemo api 를 이용해 Works, Detail 페이지 생성
React Router 를 이용하여 동영상 iframe을 get 방식으로 받아 사용하였음.

## 2022년

디자인 개편

ignore 추가 

TypeScript 도입, React Class Component => React Hook 으로 변경

Vimeo 영상 Youtube로 이전

Redux Toolkit 도입 (Youtube API 호출)

가비아에서 AWS 로 서버이전 및 nginx 웹서버 구축, HTTPS 적용

PHP Mail() => PHPMailer 

## 2024년

채널이 변경되어 카테고리 및 영상이 나오지 않는 오류수정
메뉴 디자인 변경, works 에서 카테고리를 불러 로딩창 추가

영상리스트를 불러오지 못했을 경우 에러 및 로딩중 추가

## 8월

요청으로 사이트 종료, AWS 인스턴스 삭제 
Github Page 로 올려둘 예정.


### setting 

CRA
Node 18.20.3 기존 16에서 변경

```
  "scripts": {
    "start": "export NODE_OPTIONS=--openssl-legacy-provider && react-scripts start",
    "build": "export NODE_OPTIONS=--openssl-legacy-provider && react-scripts build",
    "test": "export NODE_OPTIONS=--openssl-legacy-provider && react-scripts test",
    "eject": "react-scripts eject"
  },
```
SSL 레거시로 인한 스크립트 수정
