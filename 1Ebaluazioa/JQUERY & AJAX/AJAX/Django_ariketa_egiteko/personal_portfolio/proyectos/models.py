from django.db import models

# Create your models here.
class Proyecto(models.Model):
    titulo = models.CharField(max_length=100)
    descripcion = models.TextField()
    tecnologia = models.CharField(max_length=20)
    imagen = models.FilePathField(path="/img")

class Pregunta(models.Model):
    proyecto = models.ForeignKey(Proyecto, on_delete=models.CASCADE)
    pregunta_texto = models.CharField(max_length=200)
