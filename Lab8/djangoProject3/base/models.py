from django.db import models
from django.utils import timezone


class SongInfo(models.Model):
    authorname = models.CharField(max_length=100)
    songname = models.CharField(max_length=100)
