console.log("Course library App");

var courseList = {
    courses: [],

    displayCourse: function(){
        if (this.courses.length === 0) {
            console.log("No issue in the issues list")
        }
        else {
            console.log('myCourses:');
            for (var i = 0; i < this.courses.length; i++) {
                console.log('Course Name:'+ this.courses[i].courseName.value);
            }
        }
    },

    addCourse: function (id, courseName, totalLectures, courseDescription) {
        var a = 0;
        for( var i=0;i<this.courses.length;i++){
            if(this.courses[i].courseId === id){
                alert('Course ID is unique kindly try different course ID');
                a+=1;
            }
        };
        if(a != 1){
            this.courses.push({
                courseId: id,
                courseName: courseName,
                totalLectures: totalLectures,
                courseDescription: courseDescription
            })
        }
    },

    changeCourseName: function (position, courseName) {
        this.courses[position-1].courseName = courseName;
    },

    changeCourseDescription: function (position, courseDescription) {
        this.courses[position-1].courseDescription = courseDescription;
    },

    changeCourseTLectures: function(position,totalLectures){
        this.courses[position-1].totalLectures = totalLectures;
    },

    deleteCourse: function (position) {
        this.courses.splice(position, 1);
    }
}


var handlers= {
    displayCourses: function(){
        view.displayCourses();
    },
    addCourse: function(){
        var id = document.getElementById('id');
        var courseName = document.getElementById('cName');
        var totalLectures = document.getElementById('tLec');
        var courseDescription = document.getElementById('cDesc');
        courseList.addCourse(id.value, courseName.value, totalLectures.value, courseDescription.value);
        view.displayCourses();
        id.value = '';
        courseName.value = '';
        totalLectures.value = '';
        courseDescription.value = '';
    },
    changeCourseName: function(){
        var position = document.getElementById('position');
        var courseName = document.getElementById('newcName');
        courseList.changeCourseName(position.value, courseName.value);
        view.displayCourses();
        position.value='';
        courseName.value = '';
    },
    changeCourseDescription: function(){
        var position = document.getElementById('positionCDesc');
        var courseDescription = document.getElementById('newCDesc');
        courseList.changeCourseDescription(position.value, courseDescription.value);
        view.displayCourses();
        position.value='';
        courseDescription.value = '';
    },
    changeCourseTLectures: function(position){
        var position = document.getElementById('positionTLec');
        var totalLectures = document.getElementById('singleNewtLec');
        courseList.changeCourseTLectures(position.value,totalLectures.value);
        view.displayCourses();
        position.value = "";
        totalLectures.value = "";
    },
    deleteCourse: function(position){
        courseList.deleteCourse(position);
        view.displayCourses();
    }
};

var view = {
    displayCourses: function(){
        var courseUI = document.querySelector('ul');
        courseUI.innerHTML = '';
        for(var i=0;i<courseList.courses.length;i++){
            var courseLi = document.createElement('li');
            var course = courseList.courses[i];
            cardDiv = '<div class="card" style="width: 18rem;">';
            cardBody = '<div class="card-body">';
            contentId = '<strong>Course ID:</strong>' + course.courseId;
            contentName = '<strong>Course Name:</strong>' + course.courseName;
            contentLectures = '<strong>Total Lectures:</strong>' + course.totalLectures;
            contentDescription = '<strong>Course Description:</strong> '+ course.courseDescription;
            cardDivClosed='</div>'
            contentBreak = '<br/>'
            courseLi.id= i;
            courseLi.innerHTML = cardDiv + cardBody + contentId + contentBreak + contentName + contentBreak + contentLectures + contentBreak + contentDescription + cardDivClosed + cardDivClosed;
            courseLi.appendChild(this.createDeleteButton());
            courseUI.appendChild(courseLi);
        }
    },
        createDeleteButton: function(){
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.setAttribute('type', 'text');
            deleteButton.className = 'deleteCourse btn btn-danger';
            return deleteButton;
        },

        setUpEventListener:function(){
            var courseUI = document.querySelector('ul');
            courseUI.addEventListener('click', function(event){
                var elementClicked = event.target;

                if(elementClicked.className.includes('deleteCourse')){
                    handlers.deleteCourse(parseInt(elementClicked.parentNode.id));
                }
            });
        }
    };

view.setUpEventListener();





