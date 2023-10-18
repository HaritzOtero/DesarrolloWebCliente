from django.urls import path
from . import views

urlpatterns = [
    path("", views.proyecto_index, name="proyecto_index"),
    path("<int:pk>/", views.proyecto_detail, name="proyecto_detail"),
    path("proyecto_galderak/", views.proyecto_galderak, name="proyecto_galderak"),
    path("preguntas/<int:pk>/", views.pregunta_guardar, name='pregunta_guardar'),
    path("post_teknologia/", views.post_teknologia, name='post_teknologia'),
]