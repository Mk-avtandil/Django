# coding=utf-8
from django.shortcuts import render
from django.views.generic.base import TemplateView


class IndexView(TemplateView):
    template_name = "index.html"

class TopView(TemplateView):
    template_name = "top.html"

class CalcView(TemplateView):
    template_name = "calc.html"


