from django.core import serializers
from django.shortcuts import render, redirect
from proyectos.models import Proyecto
from proyectos.models import Pregunta
from proyectos.forms import PostForm
from django.db import connection
from django.http import JsonResponse, HttpResponse


# Create your views here.
def proyecto_index(request):
    proyectos = Proyecto.objects.all()

    context = {
        'proyectos': proyectos
    }
    return render(request, 'proyecto_index.html', context)

def proyecto_detail(request, pk):
    # usando el ORM
    proyecto = Proyecto.objects.get(pk=pk)
    context = {
        'proyecto': proyecto
    }
    return render(request, 'proyecto_detail.html', context)

def proyecto_galderak(request):
    print(request.POST)
    post_proyecto_id = request.POST.get('id')

    print(post_proyecto_id) #ikusteko proiektuaren id-a
    preguntas = list(Pregunta.objects.filter(proyecto__id=post_proyecto_id).values())

    print(preguntas)

    return JsonResponse(preguntas, safe=False)

def post_teknologia(request):
    print(request.POST)
    post_id = request.POST.get('id')
    post_tekno = request.POST.get('tecnologia')
    print(post_id)
    print(post_tekno)
    with connection.cursor() as cursor:
        sql = "UPDATE proyectos_proyecto set tecnologia = %s where id = %s"
        cursor.execute(sql, [post_tekno, post_id])
    return JsonResponse({"id": post_id, "tecnologia": post_tekno}, status=200)

def pregunta_guardar(request, pk):
    form = PostForm(request.POST)
    if form.is_valid():
        pregunta = form.save(commit=False)
        with connection.cursor() as cursor:
            sql = "INSERT INTO proyectos_pregunta(pregunta_texto, proyecto_id)"\
            "VALUES (%s, %s)"
            cursor.execute(sql, [pregunta.pregunta_texto, pk])

    return redirect('proyecto_index')