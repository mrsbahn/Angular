(function() {


function AlbumListController($scope){
	$scope.adding_album={};
	$scope.add_album_error="";
	$scope.albumNames=[
	{name:'Madrid',title:'Weekend in Madrid',date:'12.03.2014', describtion: 'At Madrid'},
	{name:'London',title:'Weekend in London',date:'11.06.2013',describtion: 'At London'},
	{name:'Berlin',title:'Weekend in Berlin',date:'23.05.2011',describtion: 'Berlin'},
	{name:'Bkk',title:'Weekend in Bkk',date:'21.09.2012',describtion: 'At Bangkok'},
	{name:'Paris',title:'Weekend in Paris',date:'16.09.2014',describtion: 'At Paris'}

	];

//model
$scope.addAlbum= function (new_album){
	// form validation
	if(!new_album.title)
		$scope.add_album_error="Missing title";
	else if (!new_album.date ||  !is_valid_date(new_album.date))
		$scope.add_album_error="Date incorrect";
	else if(!new_album.describtion)
		$scope.add_album_error="Missing description";
	else if(!new_album.name)
		$scope.add_album_error="Missing short name";
	else
	{
		$scope.albumNames.push(new_album);
		$scope.adding_album={};
		$scope.add_album_error="";
	}
};

}
function Controller404($scope){

}

photoApp.controller("AlbumListController", AlbumListController);

function is_valid_date(the_date){
	if(the_date.match(/[0-9]{2,4}\.[0-9]{1,2}\.[0-9]{1,2}/)){
		var d = new Date(the_date);
		return !isNaN(d.getTime());			
	}
	else{ 
		return false;
	}	
}



})();