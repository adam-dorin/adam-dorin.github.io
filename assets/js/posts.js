function articleTemplate(post_title,post_subtitle,post_url,post_date){

	var template = '<div class="post-preview">';
	template = template + '<a href="post/'+post_url+'">';
	template = template + '<h2 class="post-title">' + post_title + '</h2>';  
	template = template + '<h3 class="post-subtitle">' + post_subtitle + '</h3>';                         
	template = template + '</a>';                         
	template = template + '<p class="post-meta">Posted on '+post_date+'</p>';    
	template = template + '</div>';                                                     
                    
    return template;                
}
// var post = {url:"test1",title:"This is a Test title",subtitle:"This is a test subtitle",date:"September 24, 2014"};
// post = JSON.stringify(post);
// console.log(post);
// $.post({})
function getPosts(){
	var posts;
	var container = $('.posts_container');
    $.get( "posts.templ", function( data ) {
  
        posts = data;
        console.log(posts);
    	posts = $.parseJSON(posts);
    	console.log(container);
	    $.each(posts,function(i){
	    	// console.log(posts[i].title, posts[i].subtitle, posts[i].url, posts[i].date);
	    	var t = articleTemplate(posts[i].title, posts[i].subtitle, posts[i].url, posts[i].date);
	    	container.prepend(t) ;
	    });
        
    });
    // console.log(container);
}
// getPosts();