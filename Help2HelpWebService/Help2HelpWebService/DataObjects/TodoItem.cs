using Microsoft.Azure.Mobile.Server;

namespace Help2HelpWebService.DataObjects
{
    public class TodoItem : EntityData
    {
        public string Text { get; set; }

        public bool Complete { get; set; }
    }
}