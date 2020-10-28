# node-backend

10. 27(Tue)

1) postgreSQL 과 Node.js 연동을 했다.

2) postgreSQL을 사용하기 위해서는 pg 모듈과 pg-promise 모듈 중 하나를 이용한다.

3) db를 가져올때 비동기로 가져오기때문에 Promise 제공해주는 pg-promise를 사용했다.

4) express를 사용하여 router 구조를 만들었다.

10. 28 (Wed)

- 부족한게 매우매우 많지만... 우선은 Node서버 로그인/회원가입 API를 개발했다. 

- 느낀점 & 내 마음속의 적고싶은말

1) async / await를 구글에서 문서를 읽으면서 공부를 할때보다 실제 사용을 해보면서 비동기 처리를 동기식으로 해보니 훨~씬 이해가 잘되었던것 같다.

2) Java로 프로그래밍을 할때 MVC 구조로 패키지를 만들고 구현을 하는게 익숙했는데, Node로도 디자인패턴이나 패키지구조를 고민해보고 코딩을 했지만,

   막상 어떻게 패키지를 구분짓고 하여야 할지 잘 모르겠더라.. 그리하여 나는 Router안에서 db에 접근하고 비즈니스 로직을 처리하여 프론트에 응답해주는식으로 구현을했다.
   
3) npm에는 정말 다양하고 많은 모듈들이 존재하여 상황에 따라 내가 필요한것을 받아서 사용을 했다.
   
   회원가입 / 로그인에서 사용자의 비밀번호를 암호화하고 복호화하는 모듈이 Java로 개발하는것보다 훨씬 깔끔하고 잘되어 있었다.
   
   Postman을 사용하여 url로 요청을 해보고 데이터를 확인해보았다. 최근에 Java로 코딩을 할때는 Swagger를 썼었는데 나는 Postman이 더 편한것같다..
   
4) 예전에 Node + EJS로 게시판을 구현해보았던적이 있었다. 그때 당시에는 JSP와 비슷한 EJS를 사용해서 그런지 Node라는것에 별다른 대단함을 못느꼈는데..
   
   막상 노드로 REST API로 기능들만 구현해보니까 확실히 Java로 짤때보다 빠르고 가벼운 프로젝트에는 편하고 적합할것 같다.
   
   
   
   
