const Titles = require('../models/Titles');
// const {todoService,todoServiceById} = require('../services/todoService');

const getAllTitles = async (req, res) => {
    const titles = await Titles.find({});
    res.status(200).json({ 
        data: titles,
        success: true,
        message: `${req.method} - GET ALL REQUEST SUCCESSFUL`,
    });
};

const getTitlesById = async (req, res) => {
    const {id}  = req.params;
    console.log('Creating new todo with data >>>', id);
    res.status(200).json({ 
        data: id,
        success: true,
        message: `${req.method} - CREATE REQUEST SUCCESSFUL`,
    });
};

const createTitle = async (req, res) => {
    const {titles}  = req.body;
    try {
        const newTitles = await Titles.create(titles);
        console.log('Creating new todo with data >>>', newTitles);
        res.status(200).json({ 
            success: true,
            message: `${req.method} - CREATE REQUEST SUCCESSFUL`,
        });
    }
    catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        }
        else{
            console.error('Error creating todo:', error);
            if (!res.headersSent) {
                res.status(500).json({ error: error.message || 'Internal server error' });
            }
        }
    }
};

const updateTitle = async (req, res) => {
    const  {id}  = req.params;
try {
    const title = await Titles.findByIdAndUpdate(id, req.body, { new: true });
    console.log('Creating new todo with data >>>', title);
    res.status(200).json({ 
        data: title,
        data: id,
        success: true,
        message: `${req.method} - CREATE REQUEST SUCCESSFUL`,
    });
}
catch (error) {
    console.error('Error creating todo:', error);
    if (!res.headersSent) {
        res.status(500).json({ error: error.message || 'Internal server error' });
    }
}
};

const deleteTitle = async (req, res) => {
    const  {id}  = req.params;
    try {
        const titles = await Titles.findByIdAndDelete(id, req.body, { new: true });
        console.log('Creating new todo with data >>>', titles);
        res.status(200).json({ 
            data: titles,
            data: id,
            success: true,
            message: `${req.method} - CREATE REQUEST SUCCESSFUL`,
        });
    }
    catch (error) {
        console.error('Error creating title:', error);
        if (!res.headersSent) {
            res.status(500).json({ error: error.message || 'Internal server error' });
        }
    }
    };

module.exports = {
    getAllTitles,
    getTitlesById,
    createTitle,
    updateTitle,
    deleteTitle,
};