from django.shortcuts import render
from django.views.generic import ListView

from base.models import SongInfo


def index(request):
    co = SongInfo.objects.get(authorname="Bisen")
    context={
      "obj" : co
    }
    print()
    return render(request, "base/base.html", context=context)
