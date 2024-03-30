const express = require('express');
const app=express();
const port=3800;
const Course = require('./models/course');
const Task=require('./models/course');
require('./db/conn');
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('<h1>It is CoursesTask</h1>');
})

app.get('/courses/:courseId/tasks', async (req, res) => {
    try {
    
      const courseId = req.params.courseId;
      const tasks = await Task.find({ courseId: courseId });

      if(tasks.length === 0){
        return res.status(404).json({error: 'No tasks found for this course'});
      }
  
    
      res.json(tasks);
    } catch (error) {
    
      res.status(500).json({ error: error.message });
    }
  });

  app.post('/course',async (req,res)=>{
    try{
        const newRecord = await Course.create(req.body);
        res.status(201).json(newRecord);

    }
    catch(e){
        console.log(e);
        res.status(500).json({error: 'Internal server error'});
    }
});

app.post('/task',async (req,res)=>{
    try{
        const newRecord = await Task.create(req.body);
        res.status(201).json(newRecord);

    }
    catch(e){
        console.log(e);
        res.status(500).json({error: 'Internal server error'});
    }
});
  
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });

