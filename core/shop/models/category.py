from django.db import models



class Category(models.Modal):
    name = models.CharField(max_length=100)
    
    
    def __str__(self):
        return self.name
    
    
    
    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категория"