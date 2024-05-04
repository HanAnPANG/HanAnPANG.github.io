var posts=["2024/05/02/hello-world/","2024/05/02/51单片机基础涵盖/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };