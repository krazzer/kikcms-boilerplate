<?php

use KikCMS\Classes\DbService;
use KikCMS\Classes\Translator;
use Phalcon\Cli\Task;

/**
 * @property DbService $dbService
 * @property Translator $translator
 */
class WebsiteTask extends Task
{
    /**
     * Called with: php kikcms website main
     */
    public function mainAction()
    {
        echo "Website main task" . PHP_EOL;
    }
}