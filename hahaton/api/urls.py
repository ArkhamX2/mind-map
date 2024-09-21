from api import views
from django.urls import path
urlpatterns = [
    #Comment
    path('comment/get', views.get_comments),
    path('comment/create', views.create_comment),
    path('comment/update', views.update_comment),
    path('comment/delete', views.delete_comment),

    #Like
    path('like/create', views.create_like),

    #Project
    path('project/get', views.get_projects),
    path('project/get_by_user/<int:id>', views.get_project_by_user_id),
    path('project/get_by_tags', views.get_project_by_tags),
    path('project/create', views.create_project),
    path('project/update', views.update_project),
    path('project/delete', views.delete_project),

    #Course
    path('course/get', views.get_courses),
    path('course/get/<int:id>', views.get_course_by_id),
    path('course/get_by_tags', views.get_courses_by_course_tags),
    path('course/create', views.create_course),
    path('course/update', views.update_course),
    path('course/delete', views.delete_course),
    
    #CourseTag
    path('course_tag/get', views.get_course_tags),
    path('course_tag/get/<int:id>', views.get_course_tag_by_id),
    path('course_tag/get_by_course', views.get_course_tags_by_course),

    #UserTag
    path('user_tag/get/<int:id>', views.get_user_tags_by_user_id),


    


]