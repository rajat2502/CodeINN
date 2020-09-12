from . import views
from django.urls import path

urlpatterns = [
    path('', views.SnipList.as_view(), name='code'),
    path('<slug:slug>/', views.SnipDetail.as_view(), name='code_detail'),
    path('user/<username>/', views.SnipListByUser.as_view()),
]
