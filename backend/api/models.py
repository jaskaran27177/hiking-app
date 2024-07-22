from django.db import models

class Data(models.Model):
    name = models.CharField(max_length=100)
    value = models.IntegerField()
    # Add more fields as needed

    def __str__(self):
        return self.name