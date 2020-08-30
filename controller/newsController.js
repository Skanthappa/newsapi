var newsService =require ('../services/news');

async function getNewsHeadline(req, res ,next) {
    try{
        let offset = req.params && req.params.offset ? req.params.offset :1;
        let pagesize = req.params && req.params.pagesize ? req.params.pagesize :20;
        let searchValue = req.params && req.params.searchValue ? req.params.searchValue :"All";
        let result = await newsService.getNewsHeadlines(offset,pagesize,searchValue);
        res.json(result);
    }
    catch(ex)
    {
        next(ex)
    }
}

module.exports={
    getNewsHeadline
}