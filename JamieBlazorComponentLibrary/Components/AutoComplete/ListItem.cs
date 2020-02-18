using System;
using System.Collections.Generic;
using System.Text;

namespace JamieBlazorComponentLibrary.Components.AutoComplete
{
    public class ListItem<T>
    {
        public T Item { get; set; }
        public bool Highlighted { get; set; }
        public bool Selected { get; set; }
    }
}
