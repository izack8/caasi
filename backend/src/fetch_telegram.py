import json
import logging
from datetime import datetime
from telegram import Update, ForceReply, InlineKeyboardMarkup, InlineKeyboardButton, ParseMode
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters, CallbackContext, CallbackQueryHandler
import os
import requests

bot_token = "7592567059:AAFozTxsoZ7IczLCLB5B4aHJftym1fgwWXk"
recording = False


def start_recording(update: Update, context: CallbackContext) -> None:
    """
    Start recording the user's messages
    """
    global recording
    recording = True
    update.message.reply_text("Start yapping")

def stop_recording(update: Update, context: CallbackContext) -> None:
    """
    Stop recording the user's messages
    """
    global recording
    recording = False
    update.message.reply_text("Stop yapping, bitch")

def listen(update: Update, context: CallbackContext) -> None:
    """
    This function would be added to the dispatcher as a handler for messages coming from the Bot API
    """
    # Print to console
    print(f'{update.message.from_user.first_name} wrote {update.message.text}')

    text = update.message.text
    if recording and update.message.text:
        #add_entry_to_json("data/entries/entries.json", text)
        webhook_url = "https://izack.dev/telegram-webhook"
        response = requests.post(f"https://api.telegram.org/bot{bot_token}/setWebhook?url={webhook_url}", "bitch")
        print(response.json())

def add_entry_to_json(file_path, text, subpoints=None):
    if subpoints is None:
        subpoints = []

    # Get today's date in dd mmm yyyy format
    today_date = datetime.now().strftime("%d %b %Y")

    # Create a new entry
    new_entry = {
        "date": today_date,
        "entries": [
            {
                "text": text,
                "subpoints": subpoints
            }
        ]
    }

    # Read the existing data
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            data = json.load(file)
    except FileNotFoundError:
        data = []

    # Check if an entry with today's date already exists
    for entry in data:
        if entry["date"] == today_date:
            entry["entries"].append({"text": text, "subpoints": subpoints})
            break
    else:
        # If no entry with today's date exists, add the new entry to the front of the list
        data.insert(0,new_entry)

    # Write the updated data back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False, indent=4)

def pop_entry_from_json(file_path):
    # Get today's date in dd mmm yyyy format
    today_date = datetime.now().strftime("%d %b %Y")

    # Read the existing data
    with open(file_path , 'r', encoding='utf-8') as file:
        data = json.load(file)

def main() -> None:

    updater = Updater(os.getenv("TELEGRAM_BOT_TOKEN"))

    # Get the dispatcher to register handlers
    dispatcher = updater.dispatcher

    # Register commands
    dispatcher.add_handler(CommandHandler("start", start_recording))
    dispatcher.add_handler(CommandHandler("stop", stop_recording))

    # Echo any message that is not a command
    dispatcher.add_handler(MessageHandler(~Filters.command, listen))

    # Start the Bot
    updater.start_polling()

    # Run the bot until you press Ctrl-C
    updater.idle()


if __name__ == '__main__':
    main()