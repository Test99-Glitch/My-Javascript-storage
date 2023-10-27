(function (window) {
    var parseCustomSyntax = function(code) {
        var regex = /test((.*?))/g;
        var matches = code.match(regex);

        if (matches) {
            for (var i = 0; i < matches.length; i++) {
                var match = matches[i];
                var content = match.slice(2, -2);
                var FinishedCode = eval(content);
                if (FinishedCode == error) {
                return 'error';
                } else {
                return 'no error';
                }
            }
        }
    };
    var myLibrary = {
        processCustomSyntax: function(code) {
            parseCustomSyntax(code);
        }
    };
    window.myLibrary = myLibrary;

})(window);
