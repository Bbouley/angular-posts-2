var mainControllerFunction = function($scope){
  $scope.userInput = {};
  $scope.posts = [];
  $scope.showForm = false;
  $scope.newPost = {
    postTitle : '',
    postAuthor : '',
    postDescription : '',
    postPhoto : '',
  };
  $scope.savePost = function(title, author, description, photo){
    var post = {
      title: title.$modelValue,
      author: author.$modelValue,
      description: description.$modelValue,
      photoURL: photo.$modelValue,
      date: Date.now(),
      votes: 0,
      comments : [],
      showComments: false,
      showCommentForm: false
    };
    $scope.posts.push(post);
    $scope.newPost = {};
    $scope.postForm.$setPristine();
    $scope.showForm = false;
  };
  $scope.postUp = function(){
    this.post.votes += 1;
  };
  $scope.postDown = function(){
    this.post.votes -= 1;
  };
  $scope.showCommentFormFunction = function(){
    if(this.post.showCommentForm === false){
      this.post.showCommentForm = true;
    } else {
      this.post.showCommentForm = false;
    }
  };
  $scope.hideCommentFormFunction = function(){
    this.post.showCommentForm = false;
  };
  $scope.newComment = function(){
    var comment = {
      title : $scope.userInput.title,
      mainText : $scope.userInput.main,
    };
    this.post.comments.push(comment);
    $scope.userInput = {};
    this.post.showCommentForm = false;
  };

  $scope.showCommentsSection = function(){
    if(this.post.showComments === false){
      console.log('test');
      this.post.showComments = true;
    } else if(this.post.showComments === true){
      console.log('test2');
      this.post.showComments = false;
    }
  };

  $scope.sort = '-votes';

  $scope.sortOptions = ['created_at', 'author', 'title', '-votes'];

  $scope.sortPost = function(number){
    $scope.sort = $scope.sortOptions[number];
  };
};


app.controller('mainController', ['$scope', mainControllerFunction]);
