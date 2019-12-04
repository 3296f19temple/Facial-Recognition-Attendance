from django.db import models
from django.contrib.auth.models import User


class Classes(models.Model):
    courseId = models.CharField(max_length = 10)
    courseName = models.TextField()
    meetingSchedule = models.TextField()
    username  =  models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        # otherwise we get "Studentss in admin"
        verbose_name_plural = "Classes"

    def __str__(self):
        return str(self.courseId)

class Students(models.Model):
    studentName  = models.TextField()
    school_id = models.CharField(max_length = 300)
    attendence = models.CharField(max_length = 800, blank=True)
    studentPicture = models.ImageField(upload_to = 'students/',blank=False, null=True, default=1)
    classEnrolled = models.ForeignKey(Classes, on_delete=models.CASCADE, blank=True, default='', related_name="classes_enrolled", null=True)

    class Meta:
        # otherwise we get "Studentss in admin"
        verbose_name_plural = "Students"

    def __str__(self):
        return '%d: %s' % (self.id, self.studentName)

        
