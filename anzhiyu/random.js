var posts=["2024/05/02/hello-world/","2024/05/02/testdemo/","2024/04/04/guanyushijaintime/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };