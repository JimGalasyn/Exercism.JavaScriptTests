var Bob = function () { };

Bob.prototype.hey = function (tellBob) {

    console.info("tellBob =", tellBob);

    // Initialize the return value to the default reply.
    var retval = defaultReply;

    // Trim leading and trailing whitespace.
    var tellBobTrimmed = tellBob.trim();

    console.info("trimmed string =", tellBobTrimmed);

    // Test the trimmed string for the three input types.
    // These calls are order-dependent.
    if (IsSilence(tellBobTrimmed)) {
        console.info("IsSilence == true");
        retval = silenceReply;
    }
    else if (IsYelling(tellBobTrimmed)) {
        console.info("IsYelling == true");
        retval = yellingReply;
    }
    else if (IsQuestion(tellBobTrimmed)) {
        console.info("IsQuestion == true");
        retval = questionReply;
    }

    console.info("retval = ", retval);
    return retval;
};

function IsSilence(tellBob)
{
    var isSilence = !tellBob || 0 === tellBob.length;

    if (!isSilence) {
        var firstChar = tellBob[0].toUpperCase();
        isSilence =
            (tellBob.Length == 1) &&
            !IsAlphaNumeric(tellBob[0]);
    }

    return isSilence;
}

function IsAlphaNumeric(character) {
    var upperCaseChar = character.toUpperCase();

    var isAlphaNumeric =
        (upperCaseChar >= 'A' && upperCaseChar <= 'Z') ||
        (upperCaseChar >= 0 && upperCaseChar <= 9);

    return isAlphaNumeric;
}

function IsYelling(tellBob)
{
    var isYelling = false;

    var scrubbed = FilterNonAlpha(tellBob);
    console.info("scrubbed = ", scrubbed);

    if (!IsSilence(scrubbed)) {
        var tellBobUppercase = tellBob.toUpperCase();
        isYelling = (tellBobUppercase == tellBob);
    }

    return isYelling;
}


function IsQuestion(tellBob)
{
    var suffix = "?";
    return tellBob.indexOf(suffix, tellBob.length - suffix.length) !== -1;
}

function FilterNonAlpha(str) {
    return str.replace(/[^a-zA-Z]/g, '');
}

var defaultReply = "Whatever.";
var silenceReply = "Fine. Be that way!";
var yellingReply = "Whoa, chill out!";
var questionReply = "Sure.";

module.exports = Bob;