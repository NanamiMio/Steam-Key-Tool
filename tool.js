$(document).ready(function () {

            new Clipboard('.btn');
            if (!Clipboard.isSupported()) {
                $("#clear").hide();
            }

            $("#clear").click(function () {
                $("#input").val("");
                $("#outputpanel").removeClass().addClass("panel panel-default");
                $("#outputhead").html('<i class="fa fa-info fa-fw"></i>提取结果');
            });

            $("#get").click(function () {
                $("#output").val("");
                var reg = /[a-zA-Z0-9]{5}-[a-zA-Z0-9]{5}-[a-zA-Z0-9]{5}/g;
                var result = $("#input").val().match(reg);
                var botname = $("#botname").val();

                if (botname) {
                    botname += " ";
                }

                if (!result) {
                    $("#outputpanel").removeClass().addClass("panel panel-danger");
                    $("#outputhead").html(
                        '<i class="fa fa-times fa-fw"></i>提取失败，未找到 Steam Key'
                    );
                } else {
                    $("#outputpanel").removeClass().addClass("panel panel-success");
                    $("#outputhead").html('<i class="fa fa-check fa-fw"></i>提取成功，找到了 ' +
                        result.length + ' 个 Steam Key');
                    $("#output").val("!redeem " + botname + result.join(","));
                }
            });
        });