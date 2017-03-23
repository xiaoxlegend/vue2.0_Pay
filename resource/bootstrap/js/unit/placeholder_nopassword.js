$(function () {
//�ж�������Ƿ�֧��placeholder����
    supportPlaceholder = 'placeholder'in document.createElement('input'), placeholder = function (input) {
        var text = input.attr('placeholder'), defaultValue = input.defaultValue;
        if (!defaultValue) {
            input.val(text).addClass("phcolor");
        }
        input.focus(function () {
            if (input.val() == text) {
                $(this).val("");
            }
        });
        input.blur(function () {
            if (input.val() == "") {
                $(this).val(text).addClass("phcolor");
            }
        });
        //������ַ���Ϊ��ɫ
        input.keydown(function () {
            $(this).removeClass("phcolor");
        });
    };
    //���������֧��placeholder����ʱ������placeholder����
    if (!supportPlaceholder) {
        $('input').each(function () {
            text = $(this).attr("placeholder");
            if ($(this).attr("type") == "text") {
                placeholder($(this));
            }
        });
    }
});