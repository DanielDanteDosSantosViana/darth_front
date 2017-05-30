angular.module("DarthServices").factory("FileService", [
    "$http",
    function($http)
    {
        function FileServiceObject()
        {
            var self = this;

            self.files = function(fn_success, fn_error,param)
            {
                $http({
                    method: "GET",
                    url: "http://localhost:3000/file?directory="+param,
                    cache: false,
                    responseType: "json"
                }).
                then(function(data , status , headers, config)
                {
                  console.log(data)
                    var files = [];
                    if (data!=null){
                      for(var i = 0; i < data.data[0].length; ++i)
                           {
                                retorno = data.data[0]
                                retorno[i].nome
                                status = new Status(retorno[i].status.Total,retorno[i].status.Value,retorno[i].status.DataReceiver)
                                file = new File(retorno[i].nome,retorno[i].diretorio,status,retorno[i].bank,retorno[i].sequencial)
                                files.push(file)
                           }
                    }
                    fn_success(files);
                },function(data, status, headers, config) {
                  fn_error("AJAX ERROR:\n" + config.method + ": " + config.url + "\nstatus: " + status + "\nresponse: " + angular.toJson(data, true));
                  });
            },
            self.allfiles = function(fn_success, fn_error,param)
            {
                $http({
                    method: "GET",
                    url: "http://localhost:3000/file",
                    cache: false,
                    responseType: "json"
                }).
                then(function(data , status , headers, config)
                {
                  console.log(data)
                    var files = [];
                    if (data!=null){
                      for(var i = 0; i < data.data[0].length; ++i)
                           {
                                retorno = data.data[0]
                                retorno[i].nome
                                status = new Status(retorno[i].status.Total,retorno[i].status.Value,retorno[i].status.DataReceiver)
                                file = new File(retorno[i].nome,retorno[i].diretorio,status,retorno[i].bank,retorno[i].sequencial)
                                files.push(file)
                           }
                    }
                    fn_success(files);
                },function(data, status, headers, config) {
                  fn_error("AJAX ERROR:\n" + config.method + ": " + config.url + "\nstatus: " + status + "\nresponse: " + angular.toJson(data, true));
                  });
            }

        }

         return new FileServiceObject();
    }


]);
