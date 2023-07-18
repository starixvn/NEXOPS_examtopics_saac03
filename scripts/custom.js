$(document).ready(function () {
    $(".exam-question-card").each(function (_, element) {
        $(element).find(".voting-summary:last").hide();
        $(element).find(".question-answer").hide();
        $(element).find(".inline-discussion").hide();
    });

    $(".reveal-solution").click(function () {
        $(this).parents(".question-body").find(".inline-discussion").show();
    });

    $(".hide-solution").click(function () {
        $(this).parents(".question-body").find(".inline-discussion").hide();
    });
});