<?php

use KikCMS\Classes\Translator;
use KikCmsCore\Services\DbService;
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