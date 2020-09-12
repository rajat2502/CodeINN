from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.HelloView.as_view(), name='hello'),
    path('api/v1/user/', include('users.urls')),
    path('api/v1/', include('api.urls')),
    path('api/v1/snip/', include('snips.urls')),
]
