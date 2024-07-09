from django.db import models
from .category import Category  



class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.IntegerField()
    image = models.ImageField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, blank=True)
    
    
    def __str__(self):
        return self.name
    
    
    
    class Meta:
        verbose_name = "Продукт"
        verbose_name_plural = "Продукты"